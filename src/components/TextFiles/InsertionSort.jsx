// import React from 'react'
// import './textFiles.css'

// const InsertionSort = () => {
//     return (
//         <div className='text-page'>
//             <h2>Insertion Sort</h2>
//             <div>
//                 <h3>Pseudo Code</h3>
//                 <div>
//                     Step 1 - If the element is the first element, assume that it is already sorted. Return 1.<br />

//                     Step2 - Pick the next element, and store it separately in a key.<br />

//                     Step3 - Now, compare the key with all elements in the sorted array.<br />

//                     Step 4 - If the element in the sorted array is smaller than the current element, then move to the next element. Else, shift greater elements in the array towards the right.<br />

//                     Step 5 - Insert the value.<br />

//                     Step 6 - Repeat until the array is sorted.<br />
//                 </div>
//             </div>
//             <div>
//                 <h3>How does it work ?</h3>
//                 <div>
//                     Insertion sort works similar to the sorting of playing cards in hands. It is assumed that the first card is already sorted in the card game, and then we select an unsorted card. If the selected unsorted card is greater than the first card, it will be placed at the right side; otherwise, it will be placed at the left side. Similarly, all unsorted cards are taken and put in their exact place.
//                     <br />
//                     The same approach is applied in insertion sort. The idea behind the insertion sort is that first take one element, iterate it through the sorted array. Although it is simple to use, it is not appropriate for large data sets.
//                 </div>
//             </div>
//             <div>
//                 <h3>Time Complexity</h3>
//                 <div>
//                     <b>Best Case Complexity -</b>  It occurs when there is no sorting required, i.e. the array is already sorted. The best-case time complexity of insertion sort is O(n).<br />
//                     <b>Average Case Complexity -</b> It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending. The average case time complexity of insertion sort is O(n2).<br />
//                     <b>Worst Case Complexity -</b> It occurs when the array elements are required to be sorted in reverse order. That means suppose you have to sort the array elements in ascending order, but its elements are in descending order. The worst-case time complexity of insertion sort is O(n2).<br />
//                 </div>
//             </div>
//             <div>
//                 <h3>Space Complexity</h3>
//                 <div>
//                     The space complexity of insertion sort is O(1). It is because, in insertion sort, an extra variable is required for swapping.</div>
//             </div>

//         </div>

//     )
// }

// export default InsertionSort;


import React from 'react'
import simpleback9 from "../algorithms/images/simpleback9.jpg"
import Typography from '@mui/material/Typography';

const myStyle = {
  backgroundImage: `url(${simpleback9})`,
  fontSize: '20px',
  backgroundSize: 'cover',
  opacity: '1',
  text: '#00ff00',
};

function InsertionSort() {
  return (

    <>
      <div style={myStyle}>
        <br />
          <Typography heading component="h1" variant="h2" align="center" gutterBottom color='#31695B'>Insertion Sort</Typography>
          <Typography content component="h5" variant="h5" align="center" marginLeft="100px" marginRight="100px" gutterBottom color='#000000' textAlign='justify'>
          Step 1 - If the element is the first element, assume that it is already sorted. Return 1.<br />

                     Step2 - Pick the next element, and store it separately in a key.<br />

                     Step3 - Now, compare the key with all elements in the sorted array.<br />

                     Step 4 - If the element in the sorted array is smaller than the current element, then move to the next element. Else, shift greater elements in the array towards the right.<br />

                     Step 5 - Insert the value.<br />

                     Step 6 - Repeat until the array is sorted.<br />
          </Typography>


          <Typography heading component="h1" variant="h4" align="center" gutterBottom color='#31695B' style={{ padding: '20px 0em' }} vertical></Typography>
          <Typography content component="h5" variant="h5" align="center" gutterBottom color='#000000' marginLeft="50px"  marginRight="50px" textAlign='justify'>
          
            
          <h3>How does it work ?</h3>
                 <div>
                     Insertion sort works similar to the sorting of playing cards in hands. It is assumed that the first card is already sorted in the card game, and then we select an unsorted card. If the selected unsorted card is greater than the first card, it will be placed at the right side; otherwise, it will be placed at the left side. Similarly, all unsorted cards are taken and put in their exact place.
                     <br />
                     The same approach is applied in insertion sort. The idea behind the insertion sort is that first take one element, iterate it through the sorted array. Although it is simple to use, it is not appropriate for large data sets.
                 </div>
          </Typography>

          <Typography heading component="h1" variant="h4" align="center" gutterBottom color='#31695B' style={{ padding: '20px 0em' }} vertical>Time Complexity</Typography>
          <Typography content component="h5" variant="h5" align="center" gutterBottom color='#000000' marginLeft="50px"  marginRight="50px" textAlign='justify'>
          
            
          <div>
                     <b>Best Case Complexity -</b>  It occurs when there is no sorting required, i.e. the array is already sorted. The best-case time complexity of insertion sort is O(n).<br />
                     <b>Average Case Complexity -</b> It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending. The average case time complexity of insertion sort is O(n2).<br />
                     <b>Worst Case Complexity -</b> It occurs when the array elements are required to be sorted in reverse order. That means suppose you have to sort the array elements in ascending order, but its elements are in descending order. The worst-case time complexity of insertion sort is O(n2).<br />
                 </div>
          </Typography>

          <Typography heading component="h1" variant="h4" align="center" gutterBottom color='#31695B' style={{ padding: '20px 0em' }} vertical>Space Complexity</Typography>
          <Typography content component="h5" variant="h5" align="center" gutterBottom color='#000000' marginLeft="50px"  marginRight="50px" textAlign='justify'>
          
            
          <div>
                     The space complexity of insertion sort is O(1). It is because, in insertion sort, an extra variable is required for swappin
             </div>
          </Typography>

        <br />
        <br />
      </div>
    </>
  )
};
export default InsertionSort





