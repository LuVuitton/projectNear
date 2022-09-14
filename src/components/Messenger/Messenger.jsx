import { Link } from 'react-router-dom'
import messengerS from './Messenger.module.css'

const messengerData = [
    {person: 'Stasic', key: 1},
    {person: 'Anya', key: 2},
    {person: 'Ilon', key: 3},
    {person: 'Louis', key: 4},
    {person: 'Zlatan', key: 5},
] 

const messengerMap = messengerData.map(e=> <div key={e.key} className={messengerS.item}>{e.person}</div> )



function Messenger() {
    return(
        <div>
{messengerMap}
</div>
        )
}

export default Messenger