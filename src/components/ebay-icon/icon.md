
# Usage
```
<ebay-icon type='background | inline' icon='`icon-groupname-iconname` | icon-arrow-down | icon-chevron-up | icon-form-radio | icon-navigation-menu'>
```

##  Output:

### Background svg:
```
    <span class="icon `icon--navigation-menu`"></span>
```


### Inline svg:

```
    <svg aria-hidden="true" class="icon `icon--form-radio`" focusable="false" height="17" width="17">
        <use xlink:href="`#icon--form-radio`"></use>
    </svg>
```
## Bring svg source into page. Any page want inline svg should invoke `<ebay-icon-svg-source>` with group of icons like below,

```
<ebay-icon-svg-source>
    <ebay-icon-option>`icon-arrow-down`</ebay-icon-option>
    <ebay-icon-option>`icon-navigation-menu`</ebay-icon-option>
</ebay-icon-svg-source>
```

##  Output:
```
    <svg hidden>
        <!-- canvas: width=24, height=24 -->
        <!-- asset: x=7, y=7.25, width=9.75, height=10 -->
        <symbol id="`icon--arrow-down`" viewBox="7 7.25 9.75 10">
            <path d="M14.500362,12.7437638 C14.500362,12.7437638 11.5523433,15.788424 11.3274289,16.0204629 C11.1034799,16.2534726 11.1295429,16.6359969 11.3274289,16.8408512 C11.5262802,17.0457056 11.9104687,17.0602687 12.1209035,16.8408512 C12.3313384,16.6204629 16.6529755,12.158327 16.6529755,12.158327 C16.6529755,12.158327 12.3815339,7.75929782 12.1209035,7.47677355 C11.8602732,7.19424928 11.5311067,7.26706481 11.3274289,7.47677355 C11.1247164,7.68648229 11.0716251,8.019492 11.3274289,8.29619103 C11.5841981,8.57289006 14.500362,11.5728901 14.500362,11.5728901 L7.58883151,11.5728901 C7.19016362,11.5728901 7,11.8660939 7,12.158327 C7,12.4515308 7.18823302,12.7437638 7.58883151,12.7437638 L14.500362,12.7437638 Z"></path>
        </symbol>
        <!-- canvas: width=24, height=24 -->
        <!-- asset: x=8, y=10, width=8, height=5 -->
        <symbol id="`icon--navigation-menu`" viewBox="8 10 8 5">
            <path d="M8.75871413,10.1405888 C8.58514777,9.9531371 8.30374112,9.9531371 8.13017476,10.1405888 C7.95660841,10.3280404 7.95660841,10.6319596 8.13017476,10.8194113 L11.6857303,14.6594113 C11.8592966,14.8468629 12.1407033,14.8468629 12.3142696,14.6594113 L15.8698252,10.8194113 C16.0433916,10.6319596 16.0433916,10.3280404 15.8698252,10.1405887 C15.6962589,9.95313709 15.4148522,9.95313708 15.2412859,10.1405887 L12,13.6411775 L8.75871413,10.1405888 Z"></path>
        </symbol>
    </svg>
```

## browser.json of `<ebay-icon>`. entire icons and svg's source should not get bundled as part of resource aggregation. Check with Michael and Dylan on how to do that
```
{
    "dependencies": [
        // "@ebay/skin/icon",
        // "@ebay/skin/svg",
    ]
}
```
