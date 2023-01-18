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

function BubbleSort() {
  return (

    <>
      <div style={myStyle}>
        <br />
          <Typography heading component="h1" variant="h2" align="center" gutterBottom color='#31695B'>Bubble Sort</Typography>
          <Typography content component="h5" variant="h5" align="center" marginLeft="500px" gutterBottom color='#000000' textAlign='justify'>
          begin BubbleSort(arr)<br/>
                    for all array elements<br/>
                    if arr[i] greater than arr[i+1]  <br/>
                    swap(arr[i], arr[i+1]) <br/>
                    end if  <br/>
                    end for <br/>
                     return arr<br/>
                    end BubbleSort<br/>
          </Typography>


          <Typography heading component="h1" variant="h4" align="center" gutterBottom color='#31695B' style={{ padding: '20px 0em' }} vertical></Typography>
          <Typography content component="h5" variant="h5" align="center" gutterBottom color='#000000' marginLeft="50px"  marginRight="50px" textAlign='justify'>
          
            
          <h3>How does it work ?</h3>
                 <div>
                     A bubble sort is an internal exchange sort. It is considered one of the simplest methods to sort an array of objects.  It is also known as a sinking sort (because the smallest items "sink" to the bottom of the array).
                     <br />
                     Instead of searching an array as a whole, the bubble sort works by comparing adjacent pairs of objects in the array.  If the objects are not in the correct ordered, they are swapped so that the largest of the two moves up.  This process continues until the largest of the objects, eventually "bubbles" up to the highest position in the array.  After this occurs, the search for the  next largest object begins.  The swapping continues until the whole array is in the correct order.
                 </div>
          </Typography>

          <Typography heading component="h1" variant="h4" align="center" gutterBottom color='#31695B' style={{ padding: '20px 0em' }} vertical>Time Complexity</Typography>
          <Typography content component="h5" variant="h5" align="center" gutterBottom color='#000000' marginLeft="50px"  marginRight="50px" textAlign='justify'>
          
            
          <b>Best Case Complexity -</b> It occurs when there is no sorting required, i.e. the array is already sorted. The best-case time complexity of bubble sort is O(n).<br />
                    <b>Average Case Complexity -</b> It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending. The average case time complexity of bubble sort is O(n2).<br />
                    <b>Worst Case Complexity -</b> It occurs when the array elements are required to be sorted in reverse order. That means suppose you have to sort the array elements in ascending order, but its elements are in descending order. The worst-case time complexity of bubble sort is O(n2).<br />
            <br />
          </Typography>

          <Typography heading component="h1" variant="h4" align="center" gutterBottom color='#31695B' style={{ padding: '20px 0em' }} vertical>Space Complexity</Typography>
          <Typography content component="h5" variant="h5" align="center" gutterBottom color='#000000' marginLeft="50px"  marginRight="50px" textAlign='justify'>
          
            
          <div>
                     The space complexity of bubble sort is O(1). It is because, in bubble sort, an extra variable is required for swapping.<br />
                     The space complexity of optimized bubble sort is O(2). It is because two extra variables are required in optimized bubble sort.
                 </div>
          </Typography>

        <br />
        <br />
      </div>
    </>
  )
};
export default BubbleSort





