```javascript
import React from 'react';
import { Link } from 'react-router';

const FilterLink = ({ filter }) => (
    <Link
        to={filter === 'all' ? '' : filter}
        activeStyle={{ // For make the link with active color
            textDecoration: 'none',
            color: 'black'
        }}
    >
        {children}
    </Link>
);

export default FilterLink;
```
