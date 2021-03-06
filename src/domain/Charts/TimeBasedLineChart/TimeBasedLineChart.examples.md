#### TimeBasedLineChart with filled graph

```jsx
const { lineObject } = require('./sampleData');

const { createGradient } = require('./createGradient');

<TimeBasedLineChart
  data={[lineObject]}
  maxYTick={10}
  yTickStepSize={1}
  timeToolTipFormat='ll'
  timeUnit='month'
  timeDisplayFormat='MMM'
  dateFormat='DD/MM/YYYY'
  height={500}
  yAxisLabel='Value'
  xAxisLabel='Date'
/>
```

#### TimeBasedLineChart with more than 1 line

```jsx
const { lineObject2, lineObject3 } = require('./sampleData');

<TimeBasedLineChart
  data={[lineObject2, lineObject3]}
  maxYTick={300}
  yTickStepSize={20}
  timeToolTipFormat='ll'
  timeUnit='month'
  timeDisplayFormat='MMM'
  dateFormat='DD/MM/YYYY'
  height={360}
/>
```

#### TimeBasedLineChart with custom YTick Labels

```jsx
const { lineObject4 } = require('./sampleData');
const { createGradient } = require('./createGradient');

<TimeBasedLineChart
  data={[lineObject4]}
  maxYTick={200}
  yTickStepSize={50}
  yTickLabels={{
    50: 'First Label',
    100: 'Second Label',
    150: 'Third Label',
    200: 'Fourth Label'  
  }}
  timeToolTipFormat='ll'
  timeUnit='month'
  timeDisplayFormat='MMM'
  dateFormat='DD/MM/YYYY'
  height={500}
  yAxisLabel='Value'
  xAxisLabel='Date'
  hideValueLabelBetweenYTicks
/>
```
