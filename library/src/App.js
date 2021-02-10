import React, { useState, Fragment } from 'react'
import EditLibraryForm from './components/EditLibraryForm'
import LibraryForm from './components/LibraryForm'
// import LibraryFormDark from './components/LibraryFormDark'
import LibraryTable from './components/LibraryTable'
// import { Button, Modal } from 'react-bootstrap';
// import ModalLibrary from './components/ModalLibrary'
import  "./index.css";
const App = () => {
	// Data hardcoded
	const booksData = [
		{ id: 1, bookname: 'Twilight', price: '20', category:'Fantasy', description:'Vampire story' },
		{ id: 2, bookname: 'HarryPotter', price: '15', category:'Magic', description:'Magicians story and a cute little boy ' },
		
	]

	const initialFormState = { id: null, bookname: '', price: '', category:'', description:'' }

	// Setting state
	const [ books, setBooks ] = useState(booksData)
	const [ currentBook, setCurrentBook ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addBook = book => {
		book.id = books.length + 1
		setBooks([ ...books, book ])
	}

	const deleteBook = id => {
		setEditing(false)

		setBooks (books.filter(book => book.id !== id))
	}

	const updateBook = (id, updatedBook) => {
		setEditing(false)

		setBooks (books.map(book => (book.id === id ? updatedBook : book)))
	}

	const editRow = book => {
		setEditing(true)

		setCurrentBook({ id: book.id, bookname: book.bookname, price: book.price, category:book.category, description:book.description  })
	}
  
  //  const [show, setShow] = useState(false);

	return (
		<div className="container">
			<h1 style={{textAlign:"center", color:"white"}}>Pavana's Library Management</h1>
			<div className="flex-row">
				<div className="flex-large">
          <div className="flex-large">
					<h2 style={{textAlign:"center", color:"yellow"}}>Books and its prices</h2>
          {/* <button class="float-right btn1" 
          
           style={{marginLeft:"25rem"}}  
           >Add new book</button> */}
         {/* onClick={() => setShow(true)} */}
      {/* <Modal style={{backgroundColor:"black", height:"30rem"}}
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body>
          <LibraryFormDark/>
        </Modal.Body>
      </Modal> */}


					<LibraryTable style={{textAlign:"center"}} books={books} editRow={editRow} deleteBook={deleteBook} />
				</div>

					{editing ? (
						<Fragment>
							<h2>Edit Book</h2>
							<EditLibraryForm
								editing={editing}
								setEditing={setEditing}
								currentBook={currentBook}
								updateBook={updateBook}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2 style={{textAlign:"center" , color:"white"}}>Add a Book</h2>
							<LibraryForm addBook={addBook} />
						</Fragment>
					)}
				</div>
				
			</div>
		</div>
	)
}

export default App
