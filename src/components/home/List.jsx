import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

// 函数式组件默认参数为props,类似于class组件的this.props
// const List = (props) => {
// console.log(props)
// const List = ({ list }) => {
//   return (
//     <ul className="movielist">
//       {
//         list.map((item, index) => {
//           return (
//             <Link to = { '/detail/' + item.id } key = { item.id }>
//               <div className="movieimg">
//                 <img src={ item.images.small } alt={ item.alt } />
//               </div>
//               <div className="info">
//                 { index }<h3>{ item.title }</h3>
//               </div>
//             </Link>
//           )
//         })
//       }
//     </ul>
//   )
// }

const List = ({ list }) => (
  <ul className="movielist">
    {
      list.map((item, index) => {
        return (
          <Link to = { '/detail/' + item.id } key = { item.id }>
            <div className="movieimg">
              <img src={ item.images.small } alt={ item.alt } />
            </div>
            <div className="info">
              { index }<h3>{ item.title }</h3>
            </div>
          </Link>
        )
      })
    }
  </ul>
)

List.propTypes = {
  list: PropTypes.array
}

export default List
