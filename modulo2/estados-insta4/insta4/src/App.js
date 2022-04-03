import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Mina'}
          fotoUsuario={'https://ca.slack-edge.com/TLAVDH7C2-U01KD910NDU-a6910d0a0217-512'}
          fotoPost={'https://picsum.photos/200/152'}
        />

        <Post
          nomeUsuario={'Matheus'}
          fotoUsuario={'https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.6435-9/67404208_2883097955065100_7095226414680506368_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEZd3LB0oJSn-F0aczv0R61sr9e1LULHJSyv17UtQsclJr_DU7Yobp8r9bA8eOGjD7c2dsAVqJXUgPg1UwWtMxj&_nc_ohc=dmxcgzV-nZcAX_bmHa2&_nc_ht=scontent.fpoa4-1.fna&oh=00_AT8EExMtGfhnSuun_TCDX-fmH0G1wZB-htR-xlHofmQaZQ&oe=6261C93C'}
          fotoPost={'https://picsum.photos/200/159'}
        />

      </MainContainer>


    );
  }
}

export default App;
