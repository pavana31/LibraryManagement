import React, { useState, useEffect } from 'react'

const EditLibraryForm = props => {
  const [ book, setBook ] = useState(props.currentBook)

  useEffect(
    () => {
      setBook(props.currentBook)
    },
    [ props ]
  )
  

  const handleInputChange = event => {
    const { name, value } = event.target

    setBook({ ...book, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateBook(book.id, book)
      }}
    >
      <label>Name</label>
			<input type="text" 
			name="bookname" 
      value={book.bookname} 
			onChange={handleInputChange} />

			<label>Price</label>
			<input type="number" 
			name="price"
      value={book.price}  
			onChange={handleInputChange} />

			<label>Category</label>
			<input type="text" 
			name="category" 
      value={book.category} 
			onChange={handleInputChange} />

			<label for="exampleFormControlTextarea1">Description</label><br/>
                <textarea class="form-control"
                 type="text" 
                name="description" 
                value={book.description} 
                onChange={handleInputChange}
                rows="2">
	
				</textarea>
         <button  className="button muted-button">Update user</button> &nbsp;
      <button onClick={() => props.setEditing(true)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditLibraryForm
