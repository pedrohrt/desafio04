import React, {Component} from 'react'

import Post from './Post'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "../assets/post-profile.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "../assets/comment-profile.png"
            },
            content: "Diego Fernandes A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! "
          },
          {
            id: 2,
            author: {
              name: "Pedro",
              avatar: "../assets/comment-profile.png"
            },
            content: "JSX"
          },{
            id: 2,
            author: {
              name: "Pedro",
              avatar: "../assets/comment-profile.png"
            },
            content: "JSX"
          }
        ]
      },{
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "../assets/post-profile.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "../assets/comment-profile.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }, {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "../assets/post-profile.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "../assets/comment-profile.png"
            },
            content: "Diego Fernandes A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! "
          },
          {
            id: 2,
            author: {
              name: "Pedro",
              avatar: "../assets/comment-profile.png"
            },
            content: "JSX"
          },{
            id: 2,
            author: {
              name: "Pedro",
              avatar: "../assets/comment-profile.png"
            },
            content: "JSX"
          }
        ]
      },{
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "../assets/post-profile.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "../assets/comment-profile.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      
    ]
  };

  render() {
    return this.state.posts.map(post => <Post key={post.id} data={post} />)
  }
}

export default PostList;