import React from 'react';
import { Button } from 'react-bootstrap';
// import { FaBeer } from 'react-icons/fa';

const LibraryTable = props => (
   
  <table class="center" style={{backgroundColor:"white", padding:"2rem"}} >
    <thead >
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
         <th>Description</th>
        {/* <th>Actions</th> */}
      </tr>
    </thead>
    <tbody>
      {props.books.length > 0 ? (
        props.books.map(book => (
          <tr key={book.id}>
            <td>{book.bookname}</td>
            <td>{book.price}$</td>
            <td>{book.category}</td>
            <td>{book.description}</td>

            <td>
              <Button variant="success"
                onClick={() => {
                  props.editRow(book)
                }}
                className="button muted-button"
              >
                Edit
              </Button>
             &nbsp;  &nbsp;
              <button 
                onClick={() => props.deleteBook(book.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
  
)

export default LibraryTable
