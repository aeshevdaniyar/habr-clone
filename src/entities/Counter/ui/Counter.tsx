import Button from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

const Counter = () => {
    const value = useSelector(getCounterValue);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h1>
                value :
                {value}
            </h1>
            <Button onClick={increment}>
                +
            </Button>
            <Button onClick={decrement}>
                -
            </Button>
        </div>

    );
};

export default Counter;
