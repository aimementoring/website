// import React, { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
// import Layout from '../../hocs/basicLayout';
// import { uploadCustomEOI } from '../../services/portalApi';
// import { firstCharacterToUpperCaseAndSpacesForDivision } from '../../utils/formatting';
// import isClientSide from '../../utils/isClientSide';
// import eoiData from '../../constants/dynamicEOI';
// import './eoi.scss';

// // const HoodedScholarForm = dynamic(() => import('../../components/eoiForm'));

// const DynamicEOI = () => {
//   const [tableName, setTableName] = useState('');
//   const [title, setTitle] = useState('Expression of Interest!');
//   const [subTitle, setSubTitle] = useState('Please complete your data');
//   const [img, setImg] = useState('');
//   const isClient = isClientSide();
//   const router = useRouter();
//   const { table } = router.query;

//   const setDefaultTable = () => {
//     if (isClient) {
//       window.scrollTo(0, 0);
//       if (table) {
//         const preTableName = table;
//         const tableNameToSave = firstCharacterToUpperCaseAndSpacesForDivision(preTableName, '-');
//         setTableName(tableNameToSave);
//         const data = eoiData[preTableName];
//         if (data) {
//           if (data.title) {
//             setTitle(data.title);
//           }
//           if (data.subTitle) {
//             setSubTitle(data.subTitle);
//           }
//           if (data.img) {
//             setImg(data.img);
//           }
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     setDefaultTable();
//   }, []);

//   useEffect(() => {
//     setDefaultTable();
//   }, [isClient]);

//   return (
//     <Layout>
//       <div
//         className="hero-banner--default hero-banner--jobs full-width-wrap"
//         style={img ? { backgroundImage: `url(${img})` } : {}}
//       >
//         <div className="flex flex-wrap items-center">
//           <div className="banner-wrapper subpage-banner center pt3 title-margin">
//             <h1>
//               <span className="highlight-text">
//                 <em>
//                   {title}
//                   <br />
//                 </em>
//               </span>
//               <span className="sm-col-2 mx-auto block pt1 border-bottom border-gradient" />
//             </h1>
//           </div>
//           <div className="wrap mx-auto center c-white pb4 title-margin">
//             <p className="bold feature-font-family pb2 mx-auto sm-col-8">{subTitle}</p>
//           </div>
//         </div>
//       </div>

//       <div className="padding-custom-form">
//         <HoodedScholarForm
//           uploadData={uploadCustomEOI}
//           tableName={tableName}
//           showBeAFriendCheckbox
//         />
//       </div>
//     </Layout>
//   );
// };

// export default DynamicEOI;
