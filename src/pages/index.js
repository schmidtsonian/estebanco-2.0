import React, {Component} from 'react';
import {graphql} from 'gatsby'
import Layout from '../components/layout';
import TemplateHome from '../components/templates/TemplateHome/TemplateHome';


const IndexPage = ({data}) =>  (
  <Layout>
    <TemplateHome dataHome={data.allHomeJson.edges}/>
  </Layout>
);

export const query = graphql`
  query {
    allHomeJson {
      edges {
        node {
          id
          name
          data {
            subtitle
            title
            email
            items {
              id
              bgSrc
              number
              action
              title
              detail
            }
          }
        }
      }
    }
  }
`


export default IndexPage;
