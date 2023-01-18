// import React from 'react'
// import "./search.css"

// const Bfs = () => {
//   return (
//     <div>
//         <h1 class='udid_h'>Breadth First Search or BFS :</h1>
//         <p class='udid_h'>Breadth-first search (BFS) is an algorithm for searching a tree data structure for a node that
//             satisfies a given
//             property.<br/><br/>
//             It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes
//             at the next depth level.
//             <br/> <br/>
//             Extra memory, usually a queue, is needed to keep track of the child nodes that were
//             encountered but not yet explored.
//         </p>



//         <br/><br/>

//         <h3 class='udid_h'>Time complexity : O(V + E)</h3>
//         <h3 class='udid_h'>Auxiliary Space : O(V)</h3>

//         <p class="udid_h">Where V is the number of vertices and E is the number of edges in the graph</p>
//         <br/><br/>

//         <h2 class='udid_h'>Pseudo Code :</h2>
//         <div class="box1">

//             create a queue Q
//             <br/><br/>
//             mark v as visited and put v into Q<br/><br/>
//             while Q is non-empty<br/><br/>
//             remove the head u of Q<br/><br/>
//             mark and enqueue all (unvisited) neighbours of u<br/><br/><br/>

//         </div>


//     </div>
//   )
// }

// export default Bfs;

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

function Bfs() {
  return (

    <>
      <div style={myStyle}>
        <br />
          <Typography heading component="h1" variant="h2" align="center" gutterBottom color='#31695B'>Breadth First Search or BFS</Typography>
          <Typography content component="h5" variant="h5" align="center" marginLeft="500px" gutterBottom color='#000000' textAlign='justify'>
          create a queue Q
//             <br/><br/>
//             mark v as visited and put v into Q<br/><br/>
//             while Q is non-empty<br/><br/>
//             remove the head u of Q<br/><br/>
//             mark and enqueue all (unvisited) neighbours of u<br/><br/><br/>


             
          </Typography>

          <Typography heading component="h1" variant="h4" align="center" gutterBottom color='#31695B' style={{ padding: '20px 0em' }} vertical></Typography>
          <Typography content component="h5" variant="h5" align="center" gutterBottom color='#000000' marginLeft="50px"  marginRight="50px" textAlign='justify'>
          
            
          <p class='udid_h'>Breadth-first search (BFS) is an algorithm for searching a tree data structure for a node that
//             satisfies a given
//             property.<br/><br/>
//             It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes
//             at the next depth level.
//             <br/> <br/>
//             Extra memory, usually a queue, is needed to keep track of the child nodes that were
//             encountered but not yet explored.
//         </p>
        
          </Typography>

          <Typography heading component="h1" variant="h4" align="center" gutterBottom color='#31695B' style={{ padding: '20px 0em' }} vertical>Time ComplexityO (V + E)</Typography>
          <Typography content component="h5" variant="h5" align="center" gutterBottom color='#000000' marginLeft="50px"  marginRight="50px" textAlign='justify'>
          
            
        
          </Typography>

          <Typography heading component="h1" variant="h4" align="center" gutterBottom color='#31695B' style={{ padding: '20px 0em' }} vertical>Space Complexity O(V)</Typography>
          <Typography content component="h5" variant="h5" align="center" gutterBottom color='#000000' marginLeft="50px"  marginRight="50px" textAlign='justify'>
          
            
      
          </Typography>

        <br />
        <br />
      </div>
    </>
  )
};
export default Bfs