#### Someone else's comment
```jsx
<Comment
  comment={{
    id: 'sampleCommentId',
    comment: 'A very recent comment',
    personDisplayName: 'Testing Preson Name',
    personLastName: 'Culkin',
    personPreferredOrFirstName: 'McKooley',
    createdDateText: <span>just now</span>,
    personId: 'sampleCommentPersonId'
  }}
  loggedInUser={{
    id: 'sampleLoggedUserId'
  }}
/>
```

#### Own comment
```jsx
<Comment
  comment={{
    id: 'sampleCommentId',
    comment: 'This is some ancient comment',
    personDisplayName: 'Testing Preson Name',
    personLastName: 'Culkin',
    personPreferredOrFirstName: 'McKooley',
    createdDateText: <span>1st Jan 2017</span>,
    personProfilePictureId: 'http://www.multiplemayhemmamma.com/wp-content/uploads/2013/03/home-alone-150x150.jpg',
    personId: 'sampleCommentPersonId'
  }}
  loggedInUser={{
    id: 'sampleCommentPersonId'
  }}
/>
```

### Own comment with some actions attached to it
```jsx
<Comment
  comment={{
    id: 'sampleCommentId',
    comment: 'This is some ancient comment',
    personDisplayName: 'Testing Preson Name',
    personLastName: 'Culkin',
    personPreferredOrFirstName: 'McKooley',
    createdDateText: <span>1st Jan 2017</span>,
    personProfilePictureId: 'http://www.multiplemayhemmamma.com/wp-content/uploads/2013/03/home-alone-150x150.jpg',
    personId: 'sampleCommentPersonId'
  }}
  actions={[{
    text: 'Edit',
    onClick: () => { alert('Edit handler') }
  },{
    component: <hr />
  },{
    text: 'Delete',
    onClick: () => { alert('Delete handler') },
    sectionType: 'alert'
  }]}
  loggedInUser={{
    id: 'sampleCommentPersonId'
  }}
/>
```

### Comments that have a header defined will not render actionMenu and will be considered a system generated comment
```jsx
const { Text } = require('@Domain/Typographies');
const { getColor } = require ('@Domain/Colors');

<Comment
  comment={{
    id: 'sampleCommentId',
    personDisplayName: 'Lyanna Moreton',
    personLastName: 'Moreton',
    personPreferredOrFirstName: 'Lyanna',
    createdDateText: <span>1st Jan 2017</span>,
    personProfilePictureId: 'http://www.multiplemayhemmamma.com/wp-content/uploads/2013/03/home-alone-150x150.jpg',
    personId: 'lyanna',
    header: <span style={{ marginLeft: '5px' }}>has <Text isHeavy color={getColor('success')}>approved</Text> Joshua Brady's <Text isHeavy color={getColor('secondary')}>qualification</Text> with a <Text isHeavy color={getColor('alert')}>very long</Text> message to test how a long message would look.</span>
  }}
  loggedInUser={{
    id: 'sampleCommentPersonId'
  }}
/>
```