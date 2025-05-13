export const Sum = props => (
  <p>
    Sum of {props.a || 0} and {props.b || 0} is{' '}
    {(props.a || 0) + (props.b || 0)}
  </p>
);
