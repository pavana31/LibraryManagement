// import React, { useState } from 'react'
// import  "./Library.css";

// const LibraryFormDark = props => {
// 	const initialFormState = { id: null, bookname: '', price: '', category:'', description:'' }
// 	const [ book, setBook ] = useState(initialFormState)

// 	const handleInputChange = event => {
// 		const { name, value } = event.target

// 		setBook({ ...book, [name]: value })
// 	}

// 	return (
       
// 		<form className="center" style={{color:"white"}}
// 			onSubmit={event => {
// 				event.preventDefault()
// 				if (!book.bookname && !book.price && !book.category && !book.description) return

// 				props.addBook(book)
// 				setBook(initialFormState)
// 			}}
// 		>
// 			<label>Book Name</label>
// 			<input type="text" className="input-group"
// 			name="bookname" 
//             value={book.bookname} onChange={handleInputChange} />
//             <br/>

// 			<label>Price$</label>
// 			<input type="number" className="input-group"
// 			name="price"
//             value={book.price}  
// 			onChange={handleInputChange} />
//              <br/>

// 			<label>Category</label>
// 			<input type="text" className="input-group"
// 			name="category" 
//             value={book.category} 
// 			onChange={handleInputChange} />
//              <br/>

// 			<label for="exampleFormControlTextarea1">Description</label><br/>
//                 <textarea type="text" name="description" class="form-control input-group " 
//                 value={book.description} 
//                 onChange={handleInputChange}
//                 rows="2">
	
// 				</textarea>
//                  <br/>


// 			<button class="btn1"  >Add new user</button>
		
//         </form>
// 	)
// }

// export default LibraryFormDark
