# react-responsive

### Install:
```javascript
npm i @vladsilav68/react-responsive
```

### Import MediaQuery:
```javascript
import { MediaQuery } from '@vladsilav68/react-responsive'
```

### Import useMediaQuery:
```javascript
import { useMediaQuery } from '@vladsilav68/react-responsive'
```

### For example (hook):
```javascript
import { useMediaQuery } from '@vladsilav68/react-responsive'

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return <div>
    <h1>Device Test!</h1>
    {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
    {isBigScreen && <p>You  have a huge screen</p>}
    {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
    <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
    {isRetina && <p>You are retina</p>}
  </div>
}
```

### For example (component):
```javascript
import { MediaQuery } from '@vladsilav68/react-responsive'

const Example = () => (
    <div>
        <h1>Device Test!</h1>
        <MediaQuery minWidth={1224}>
        <p>You are a desktop or laptop</p>
        <MediaQuery minWidth={1824}>
            <p>You also have a huge screen</p>
        </MediaQuery>
        </MediaQuery>

        <MediaQuery orientation='portrait'>
            <p>Your are in portrait orientation</p>
        </MediaQuery>

        <MediaQuery minResolution='2dppx'>
        <p>You are retina (props -- string)</p>
        </MediaQuery>

        <MediaQuery minResolution={2}>
        <p>You are retina (props -- number)</p>
        </MediaQuery>
    </div>
)
```