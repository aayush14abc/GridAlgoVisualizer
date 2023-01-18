// import React from 'react'
// import './textFiles.css'

// const QuickSort = () => {
//     return (
//         <div className='text-page'>
//             <h2>Quick Sort</h2>
//             <div>
//                 <h3>Pseudo Code</h3>
//                 <div>
//                     QUICKSORT (array A, start, end)  <br />

//                     1 if (start less than end)     <br />
//                     2 p = partition(A, start, end)  <br />
//                     3 QUICKSORT (A, start, p - 1)   <br />
//                     4 QUICKSORT (A, p + 1, end)    <br />

//                 </div>
//                 <h4>Partition Algorithm</h4>
//                 <div>
//                 <p>The partition algorithm rearranges the sub-arrays in a place.</p>
//                     PARTITION (array A, start, end)   <br />
//                     1 pivot ? A[end]     <br />
//                     2 i ? start-1     <br />
//                     3 for j ? start to end -1   <br />
//                     4 do if (A[j] less than pivot)    <br />
//                     5 then i ? i + 1     <br />
//                     6 swap A[i] with A[j]   <br />
//                     7 swap A[i+1] with A[end]   <br />
//                     8 return i+1   <br />
//                 </div>
//             </div>
//             <div>
//                 <h3>How does it work ?</h3>
//                 <div>

//                     Sorting is a way of arranging items in a systematic manner. Quicksort is the widely used sorting algorithm that makes n log n comparisons in average case for sorting an array of n elements. It is a faster and highly efficient sorting algorithm. This algorithm follows the divide and conquer approach.
//                     Divide and conquer is a technique of breaking down the algorithms into subproblems, then solving the subproblems, and combining the results back together to solve the original problem.<br />

//                     Divide: In Divide, first pick a pivot element. After that, partition or rearrange the array into two sub-arrays such that each element in the left sub-array is less than or equal to the pivot element and each element in the right sub-array is larger than the pivot element.<br />

//                     Conquer: Recursively, sort two subarrays with Quicksort.<br />
//                     Combine: Combine the already sorted array.<br />

//                     Quicksort picks an element as pivot, and then it partitions the given array around the picked pivot element. In quick sort, a large array is divided into two arrays in which one holds values that are smaller than the specified value (Pivot), and another array holds the values that are greater than the pivot.<br />

//                     After that, left and right sub-arrays are also partitioned using the same approach. It will continue until the single element remains in the sub-array.<br />
//                 </div>
//                 <h4>Choosing the Pivot Point</h4>
//                 <div>
//                     Picking a good pivot is necessary for the fast implementation of quicksort. However, it is typical to determine a good pivot. Some of the ways of choosing a pivot are as follows -<br />

//                     Pivot can be random, i.e. select the random pivot from the given array.<br />
//                     Pivot can either be the rightmost element of the leftmost element of the given array.<br />
//                     Select median as the pivot element.<br />
//                 </div>
//             </div>

//             <div>
//                 <h3>Time Complexity</h3>
//                 <div>
//                     <b>Best Case Complexity -</b>In Quicksort, the best-case occurs when the pivot element is the middle element or near to the middle element. The best-case time complexity of quicksort is O(n*logn).<br />
//                     <b>Average Case Complexity -</b>It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending. The average case time complexity of quicksort is O(n*logn).<br />
//                     <b>Worst Case Complexity -</b> In quick sort, worst case occurs when the pivot element is either greatest or smallest element. Suppose, if the pivot element is always the last element of the array, the worst case would occur when the given array is sorted already in ascending or descending order. The worst-case time complexity of quicksort is O(n2).<br />
//                 </div>
//             </div>
//             <div>
//                 <h3>Space Complexity</h3>
//                 <div>
//                 The space complexity of quicksort is O(n*logn).
//                 </div>
//             </div>

//         </div>

//     )
// }

// export default QuickSort;

// import React from 'react'
// import './textFiles.css'

// const SelecionSort = () => {
//     return (
//         <div className='text-page'>
//             <h2>Selection Sort</h2>
//             <div>
//                 <h3>Pseudo Code</h3>
//                 <div>
//                     SELECTION SORT(arr, n)  <br />

//                     Step 1: Repeat Steps 2 and 3 for i = 0 to n-1  <br />
//                     Step 2: CALL SMALLEST(arr, i, n, pos)  <br />
//                     Step 3: SWAP arr[i] with arr[pos]  <br />
//                     [END OF LOOP]  <br />
//                     Step 4: EXIT  <br />

//                     SMALLEST (arr, i, n, pos)  <br />
//                     Step 1: [INITIALIZE] SET SMALL = arr[i]  <br />
//                     Step 2: [INITIALIZE] SET pos = i  <br />
//                     Step 3: Repeat for j = i+1 to n  <br />
//                     if (SMALL greater than arr[j])  <br />
//                     SET SMALL = arr[j]  <br />
//                     SET pos = j  <br />
//                     [END OF if]  <br />
//                     [END OF LOOP]  <br />
//                     Step 4: RETURN pos <br />
//                 </div>
//             </div>
//             <div>
//                 <h3>How does it work ?</h3>
//                 <div>
//                     In selection sort, the smallest value among the unsorted elements of the array is selected in every pass and inserted to its appropriate position into the array. It is also the simplest algorithm. It is an in-place comparison sorting algorithm. In this algorithm, the array is divided into two parts,
//                     first is sorted part, and another one is the unsorted part. Initially, the sorted part of the array is empty, and unsorted part is the given array. Sorted part is placed at the left, while the unsorted part is placed at the right.<br />

//                     In selection sort, the first smallest element is selected from the unsorted array and placed at the first position. After that second smallest element is selected and placed in the second position. The process continues until the array is entirely sorted.
//                 </div>
//             </div>
//             <div>
//                 <h3>Time Complexity</h3>
//                 <div>
//                     <b>Best Case Complexity -</b> It occurs when there is no sorting required, i.e. the array is already sorted. The best-case time complexity of selection sort is O(n2).<br />
//                     <b>Average Case Complexity -</b> It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending. The average case time complexity of selection sort is O(n2).<br />
//                     <b>Worst Case Complexity -</b>  It occurs when the array elements are required to be sorted in reverse order. That means suppose you have to sort the array elements in ascending order, but its elements are in descending order. The worst-case time complexity of selection sort is O(n2).<br />
//                 </div>
//             </div>
//             <div>
//                 <h3>Space Complexity</h3>
//                 <div>
//                     The space complexity of selection sort is O(1). It is because, in selection sort, an extra variable is required for swapping.
//                 </div>
//             </div>

//         </div>

//     )
// }

// export default SelecionSort;

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

function QuickSort() {
  return (

    <>
      <div style={myStyle}>
        <br />
          <Typography heading component="h1" variant="h2" align="center" gutterBottom color='#31695B'>Quick Sort</Typography>
          <Typography content component="h5" variant="h5" align="center" marginLeft="500px" gutterBottom color='#000000' textAlign='justify'>
          <div>
          <div>
          <div>
                     QUICKSORT (array A, start, end)  <br />

                     1 if (start less than end)     <br />
                     2 p = partition(A, start, end)  <br />
                     3 QUICKSORT (A, start, p - 1)   <br />
                     4 QUICKSORT (A, p + 1, end)    <br />

                 </div>
                 <h4>Partition Algorithm</h4>
                 <div>
                 <p>The partition algorithm rearranges the sub-arrays in a place.</p>
                     PARTITION (array A, start, end)   <br />
                     1 pivot ? A[end]     <br />
                     2 i ? start-1     <br />
                     3 for j ? start to end -1   <br />
                     4 do if (A[j] less than pivot)    <br />
                     5 then i ? i + 1     <br />
                     6 swap A[i] with A[j]   <br />
                     7 swap A[i+1] with A[end]   <br />
                     8 return i+1   <br />
                 </div>
             
                 <h3>How does it work ?</h3>
                 <div>

                     Sorting is a way of arranging items in a systematic manner. Quicksort is the widely used sorting algorithm that makes n log n comparisons in average case for sorting an array of n elements. It is a faster and highly efficient sorting algorithm. This algorithm follows the divide and conquer approach.
                     Divide and conquer is a technique of breaking down the algorithms into subproblems, then solving the subproblems, and combining the results back together to solve the original problem.<br />

                     Divide: In Divide, first pick a pivot element. After that, partition or rearrange the array into two sub-arrays such that each element in the left sub-array is less than or equal to the pivot element and each element in the right sub-array is larger than the pivot element.<br />

                     Conquer: Recursively, sort two subarrays with Quicksort.<br />
                     Combine: Combine the already sorted array.<br />

                     Quicksort picks an element as pivot, and then it partitions the given array around the picked pivot element. In quick sort, a large array is divided into two arrays in which one holds values that are smaller than the specified value (Pivot), and another array holds the values that are greater than the pivot.<br />

                     After that, left and right sub-arrays are also partitioned using the same approach. It will continue until the single element remains in the sub-array.<br />
                 </div>
                 <h4>Choosing the Pivot Point</h4>
                 <div>
                     Picking a good pivot is necessary for the fast implementation of quicksort. However, it is typical to determine a good pivot. Some of the ways of choosing a pivot are as follows -<br />

                     Pivot can be random, i.e. select the random pivot from the given array.<br />
                     Pivot can either be the rightmost element of the leftmost element of the given array.<br />
                     Select median as the pivot element.<br />
                 </div>
             </div>
             
                 </div>
          </Typography>


          <Typography heading component="h1" variant="h4" align="center" gutterBottom color='#31695B' style={{ padding: '20px 0em' }} vertical></Typography>
          <Typography content component="h5" variant="h5" align="center" gutterBottom color='#000000' marginLeft="50px"  marginRight="50px" textAlign='justify'>
          
            
          
          <h3>How does it work ?</h3>
                 <div>
                     In selection sort, the smallest value among the unsorted elements of the array is selected in every pass and inserted to its appropriate position into the array. It is also the simplest algorithm. It is an in-place comparison sorting algorithm. In this algorithm, the array is divided into two parts,
                     first is sorted part, and another one is the unsorted part. Initially, the sorted part of the array is empty, and unsorted part is the given array. Sorted part is placed at the left, while the unsorted part is placed at the right.<br />

                     In selection sort, the first smallest element is selected from the unsorted array and placed at the first position. After that second smallest element is selected and placed in the second position. The process continues until the array is entirely sorted.
                 </div>
          </Typography>

          <Typography heading component="h1" variant="h4" align="center" gutterBottom color='#31695B' style={{ padding: '20px 0em' }} vertical>Time Complexity</Typography>
          <Typography content component="h5" variant="h5" align="center" gutterBottom color='#000000' marginLeft="50px"  marginRight="50px" textAlign='justify'>
          
            
          <h3>Time Complexity</h3>
          <b>Best Case Complexity -</b>In Quicksort, the best-case occurs when the pivot element is the middle element or near to the middle element. The best-case time complexity of quicksort is O(n*logn).<br />
                     <b>Average Case Complexity -</b>It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending. The average case time complexity of quicksort is O(n*logn).<br />
                     <b>Worst Case Complexity -</b> In quick sort, worst case occurs when the pivot element is either greatest or smallest element. Suppose, if the pivot element is always the last element of the array, the worst case would occur when the given array is sorted already in ascending or descending order. The worst-case time complexity of quicksort is O(n2).<br />
          </Typography>

          <Typography heading component="h1" variant="h4" align="center" gutterBottom color='#31695B' style={{ padding: '20px 0em' }} vertical>Space Complexity</Typography>
          <Typography content component="h5" variant="h5" align="center" gutterBottom color='#000000' marginLeft="50px"  marginRight="50px" textAlign='justify'>
          
            
          
          <h3>Space Complexity</h3>
          <div>
                 The space complexity of quicksort is O(n*logn).
                 </div>
          </Typography>

        <br />
        <br />
      </div>
    </>
  )
};
export default QuickSort






