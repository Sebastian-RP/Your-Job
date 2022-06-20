import React from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert'

function Success() {
    const navigate = useNavigate();

    function resolveAfter5Seconds(x) {
        return new Promise(resolve => {
            setTimeout(() => {
            resolve(x);
            }, 5000);
        });
    }
      
    async function f1() {
        var x = await resolveAfter5Seconds(10);
        if (x === 10) {
            navigate(`/home`);
        }
    }
    async function f2() {
        navigate(`/home`);
    }
    f1();

  return (
    <div>
        <h1>Success</h1>
        <p>You can click in the botton to go home or wait 5 secs to be redirect</p>
        <button onClick={() => f2()}>Go to Home</button>
    </div>
  )
}

export default Success
