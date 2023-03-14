const commentList = document.querySelector('#comment-list')

function fetchprof() {
  axios.get('http://localhost:4001/profile')
    .then(res => {
      //backend -fetch profile data SQL 
      //add name,email,bith to profile in this
      const nameDisp = document.querySelector('#name-disp');
      const emailDisp = document.querySelector('#email-disp');
      const birthDisp = document.querySelector('#birth-disp');
      const { name, email, birthday } = res.data[0];
      nameDisp.textContent = `Name: ${name}`;
      emailDisp.textContent = `Email: ${email}`;
      birthDisp.textContent = `Birthday: ${birthday}`;
    });
}

function submitForm() { 
    
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const birthday = document.getElementById('date-input').value;
  
    const formData = { name, email, birthday }
  
    axios.post('http://localhost:4001/submit-form', formData)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

fetchprof()


const getCompliment = () => {
  axios.get("http://localhost:4001/api/compliment/")
      .then(res => {
          const data = res.data;
          alert(data);
  });
};

const getCompliment2 = () => {
axios.get("http://localhost:4001/api/compliment2/")
    .then(res => {
        const data = res.data;
        alert(data);
});
};

const getCompliment3 = () => {
axios.get("http://localhost:4001/api/compliment3/")
    .then(res => {
        const data = res.data;
        alert(data);
});
};

const getCompliment4 = () => {
axios.get("http://localhost:4001/api/compliment4/")
    .then(res => {
        const data = res.data;
        alert(data);
});
};

getComment ()

function submitComment () {
  const comment = document.querySelector('#comment-form').value

  const formData = { comment, customer_id: 1 }
  
  axios.post('http://localhost:4001/sub-comment', formData)
    .then(res => { 
      getComment ()
      console.log(res.data);           
    })
    .catch(error => {
      console.error(error);
    });
};

function getComment () {
  commentList.innerHTML = ''
  
  axios.get('http://localhost:4001/get-comment')
    .then(res => {
      console.log(res.data);   
      res.data.forEach(elem => {
      let commentCard = 
      `<div class="comment-list">
      <p>${elem.name}<p>
      <p>${elem.comment}</p>
      <button onclick="deleteCard(${elem['id']})">Delete</button>
      </div>`
      commentList.innerHTML += commentCard
    })
  })
}



function deleteCard(id) {
  axios.delete(`http://localhost:4001/get-comment/${id}`)
      .then(() => getComment())
      .catch(err => console.log(err))
}


