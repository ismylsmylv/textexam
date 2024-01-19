import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/slice'
function Home() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>Home
            <div>
                <div>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    <span>{count}</span>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home