import React from 'react'
import Header from './Header'
import Maintable from './Maintable'
import Tabs from '../common/tabs/Tabs'


function Table({data}) {
  return (
    <div style={{ background:"white"}} className="grid grid-cols-1 gap-0 p-2 dark:bg-#ffff text-sm text-black font-medium">
   {/* Customer Creation */}
   <Tabs/>
   <Header data={data}/>
   <Maintable data={data}/>
    </div>
  )
}

export default Table