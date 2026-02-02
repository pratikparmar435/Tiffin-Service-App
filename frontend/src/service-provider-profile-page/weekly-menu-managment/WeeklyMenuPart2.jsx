import { useState } from 'react'
import WeeklyMenuForMapping from './WeeklyMenuForMapping'
import WeeklyMenuManagment from './WeeklyMenuManagment'

function WeeklyMenuPart2() {
    const userdata = [{
        day: 'Mon',
        food: 'samosa'
    },
    {
        day: 'Tue',
        food: '{title}'
    },
    {
        day: 'Wed',
        food: 'biryani'
    },
    {
        day: 'Thurs',
        food: 'veg upma'
    },
    {
        day: 'Fri',
        food: 'palak panir'
    },
    {
        day: 'Sat',
        food: 'cheese sandwitch '
    },
    {
        day: 'Sun',
        food: 'idli-dhosa'
    }
    ]
    const [active, setactive] = useState(null)
    return (
        <div className='w-full mb-0'>
            <WeeklyMenuManagment />
            <div className="flex gap-4 overflow-x-auto pb-2 mt-5">
                {
                    userdata.map((user, idx) => {
                        return <WeeklyMenuForMapping
                            user={user}
                            idx={idx}
                            key={idx}
                            setactive={setactive}
                            active={active}
                        ></WeeklyMenuForMapping>

                    })
                }
            </div >
        </div>

    )

}

export default WeeklyMenuPart2



