import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory,{ textFilter } from 'react-bootstrap-table2-filter';


function DataList() {

const [userList,setUserList]=useState([]);

const columns=[{dataField:"id",text:'Id',filter:textFilter()},
    { dataField: "name", text: 'Name', sort: true, filter: textFilter() },
    { dataField: "username", text: 'Username', sort: true, filter: textFilter() },
    { dataField: "email", text: 'Email', sort: true, filter: textFilter() }]

    const pagination=paginationFactory({
        page:1,
        sizePerPage:2,
        lastPageText:'>>',
        firstPageText:'<<',
        nextPageText:'>',
        prePageText:'<',
        showTotal:true,
        alwaysShowAllBtns:true,
        onPageChange:function (page,sizePerPage)
        {
            console.log('page',page);
            console.log('sizePerPage', sizePerPage);
        }

    })
 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').
        then(response=>response.json()).
        then(result=>setUserList(result)).
        catch(error=>console.log(error))
     }, [])



 return (
    <>
         <BootstrapTable bootstrap4 keyField='id' columns={columns} data={userList} pagination={pagination} filter={filterFactory()}/>
        {/* <table>
            <tr>
                 <th>id</th>
                 <th>name</th>
                 <th>username</th>
                 <th>email</th>
            </tr>
            {
                userList && userList.length>0 ?
                userList.map(usr=>
                    <tr>
                        <td>{usr.id}</td>
                        <td>{usr.name}</td>
                        <td>{usr.user}</td>
                        <td>{usr.email}</td>
                    </tr>
                    
                ):'Loading'

                
            }
        </table> */}
       
    </>
  )
}

export default DataList