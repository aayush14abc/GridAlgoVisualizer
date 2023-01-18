// import React from 'react'
// import "./search.css"

// const Dfs = () => {
//   return (
//     <>
//     <div>
//         <h1 class='udid_h'>Depth First Search or DFS :</h1>
//         <p class='udid_h'>Depth-first search is an algorithm for traversing or searching tree or graph data
//             structures. <br/><br/>The algorithm starts at the root node and explores as far as possible along each branch
//             before backtracking.
//             <br/> <br/>
//             So the basic idea is to start from the root or any arbitrary node and mark the node and move to the adjacent
//             <br/>unmarked node and continue this loop until there is no unmarked adjacent node.
//             <br/><br/>Then backtrack and check for
//             other unmarked nodes and traverse them. Finally, print the nodes in the path.
//         </p>


//         <br/><br/>

//         <h3 class='udid_h'>Time complexity : O(V + E)</h3>
//         <h3 class='udid_h'>Auxiliary Space : O(V)</h3>

//         <p class="udid_h">Where V is the number of vertices and E is the number of edges in the graph</p>
//         <br/><br/>

//         <h2 class='udid_h'>Pseudo Code :</h2>
//         <div class="box">
//             DFS(G, u)<br/><br/>
//             u.visited = true<br/><br/>
//             for each v ∈ G.Adj[u]<br/><br/>
//             if v.visited == false<br/><br/>
//             DFS(G,v)<br/><br/><br/>

//             init() <br/><br/>
//             <br/><br/>
//                For each u ∈ G<br/><br/>
//             u.visited = false<br/><br/>
//             For each u ∈ G<br/><br/>
//             DFS(G, u)<br/><br/>
            
//         </div>


//     </div>
//     </>
    
//   )
// }

// export default Dfs;

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

function Dfs() {
  return (

    <>
      <div style={myStyle}>
        <br />
          <Typography heading component="h1" variant="h2" align="center" gutterBottom color='#31695B'>Depth First Search or DFS</Typography>
          <Typography content component="h5" variant="h5" align="center" marginLeft="500px" gutterBottom color='#000000' textAlign='justify'>
          DFS(G, u)<br/><br/>
             u.visited = true<br/><br/>
             for each v ∈ G.Adj[u]<br/><br/>
             if v.visited == false<br/><br/>
             DFS(G,v)<br/><br/><br/>

             init() <br/><br/>
             <br/><br/>
            For each u ∈ G<br/><br/>
             u.visited = false<br/><br/>
             For each u ∈ G<br/><br/>
             DFS(G, u)<br/><br/>


             
          </Typography>

          <Typography heading component="h1" variant="h4" align="center" gutterBottom color='#31695B' style={{ padding: '20px 0em' }} vertical></Typography>
          <Typography content component="h5" variant="h5" align="center" gutterBottom color='#000000' marginLeft="50px"  marginRight="50px" textAlign='justify'>
          
            
          <p class='udid_h'>Depth-first search is an algorithm for traversing or searching tree or graph data
             structures. <br/><br/>The algorithm starts at the root node and explores as far as possible along each branch
             before backtracking.
             <br/> <br/>
             So the basic idea is to start from the root or any arbitrary node and mark the node and move to the adjacent
             <br/>unmarked node and continue this loop until there is no unmarked adjacent node.
             <br/><br/>Then backtrack and check for
             other unmarked nodes and traverse them. Finally, print the nodes in the path.
         </p>
        
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
export default Dfs





