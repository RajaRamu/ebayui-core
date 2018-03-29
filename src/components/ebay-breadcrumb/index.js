const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getTemplateData(state, input) {
    const htmlAttributes = processHtmlAttributes(input);
    const items = input.items || [];
    let transformedItems = (items).map((item, index) => {
        const itemHtmlAttributes = processHtmlAttributes(item);
        let tag = 'a';
        const href = item.href || '';
        const current = ((items.length - 1) === index);
        if (current && !href) {
            tag = 'span';
            itemHtmlAttributes['aria-current'] = 'page';
        } else if (href) {
            itemHtmlAttributes.href = href;
        }
        return {
            tag: tag,
            htmlAttributes: itemHtmlAttributes,
            renderBody: item.renderBody
        };
    });
    transformedItems = Object.keys(transformedItems).length > 0 ? transformedItems : null;
    return {
        items: transformedItems,
        headingText: input.headingText || '',
        headingLevel: input.headingLevel || 'h2',
        htmlAttributes: htmlAttributes
    };
}
function handleClick(event, el) {
    emitAndFire(this, 'breadcrumb-click', { event, currentTarget: el });
}

module.exports = markoWidgets.defineComponent({
    template,
    getTemplateData,
    handleClick
});
