let logoutBtn = document.querySelector('#logout-btn');

logoutBtn.addEventListener('click',()=>{
  localStorage.removeItem('jwt');

  window.location = '/index.html';
});

window.addEventListener('load',(event)=>{
  populateReimbursementsTable();
});

async function populateReimbursementsTable(){
  const URL =`http://localhost:8081/user/${localStorage.getItem('user_id')}/reimbursements`;

  let res = await fetch(URL,{
    method: 'GET',
    headers: {
      'Authorization':`Bearer ${localStorage.getItem('jwt')}` //include our jwt in request
    }
  })

  if(res.status === 200) {
    let reimbursements = await res.json();


    for (let reimbursement of reimbursements){

    let tr = document.createElement('tr');

    let td1 =document.createElement('td');
    td1.innerText = reimbursement.id;

    let td2 = document.createElement('td')
    td2.innerText = reimbursement.amount;


    let td3 = document.createElement('td')
    td3.innerText = reimbursement.submitDate;

    let td4 = document.createElement('td')
    td4.innerText = reimbursement.resolveDate;

    let td5 = document.createElement('td')
    td5.innerText = reimbursement.status;

    let td6 = document.createElement('td')
    td6.innerText = reimbursement.type;

    let td7 = document.createElement('td')
    td7.innerText = reimbursement.authorId;

    let td8 = document.createElement('td')
    td8.innerText = reimbursement.authorUserName;

    // let td9= document.createElement('td')
    // td9.innerText = reimbursement.authorFirst;

    // let td10 = document.createElement('td')
    // td10.innerText = reimbursement.authorLast;

    // let td11 = document.createElement('td')
    // td11.innerText = reimbursement.authorEmail;

    // let td12 = document.createElement('td')
    // td12.innerText = reimbursement.authorRole;

    let td13 = document.createElement('td')
    td13.innerText = (reimbursement.resolverId  ? reimbursement.resolverId : 'Not Resolved');
    td13.style.color = (reimbursement.resolverId  ? reimbursement.resolverId.color : 'red');

    let td14 = document.createElement('td')
    td14.innerText = (reimbursement.resolverUserName? reimbursement.resolverUserName : 'Not Resolved');
    td14.style.color = (reimbursement.resolverUserName? reimbursement.resolverUserName.color : 'red');

    // let td15= document.createElement('td')
    // td15.innerText = (reimbursement.resolverFirst? reimbursement.resolverFirst : 'Not Resolved');
    // td15.style.color = (reimbursement.resolverFirst? reimbursement.resolverFirst.color : 'red');

    // let td16 = document.createElement('td')
    // td16.innerText = (reimbursement.resolverLast? reimbursement.resolverLast : 'Not Resolved');
    // td16.style.color = (reimbursement.resolverLast? reimbursement.resolverLast.color : 'red');

    // let td17 = document.createElement('td')
    // td17.innerText = (reimbursement.resolverEmail? reimbursement.resolverEmail : 'Not Resolved');
    // td17.style.color = (reimbursement.resolverEmail? reimbursement.resolverEmail.color : 'red');

    // let td18 = document.createElement('td')
    // td18.innerText = reimbursement.resolverRole;


    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    // tr.appendChild(td9);
    // tr.appendChild(td10);
    // tr.appendChild(td11);
    // tr.appendChild(td12);
    tr.appendChild(td13);
        tr.appendChild(td14);
        // tr.appendChild(td15);
        // tr.appendChild(td16);
        // tr.appendChild(td17);
        // tr.appendChild(td18);


        let tbody = document.querySelector('#reimbursements-tbl > tbody');
        tbody.appendChild(tr);
  }



  console.log(reimbursements);
}
}