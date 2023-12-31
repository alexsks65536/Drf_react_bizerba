import React from 'react'


const CustomerItem = ({customer}) => {
   return (
       <tr>
           <td>
               {customer.title}
           </td>
           <td>
               {customer.address}
           </td>
       </tr>
   )
}


const CustomerList = ({customers}) => {
   return (
       <table>
           <th>
               Наименование
           </th>
           <th>
               Адрес
           </th>
           {customers.map((customer) => <CustomerItem customer={customer} />)}
       </table>
   )
}


export default CustomerList
