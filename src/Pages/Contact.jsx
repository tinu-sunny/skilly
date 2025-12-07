import React from 'react'
import AppFooter from '../components/AppFooter'
import Header from '../components/Header'

function Contact() {
  return (
    <>
    {/* App header */}
    <Header/>

{/* contact */}
<section>
 <div>
     {/* contact Details */}
     <div>
        {/* heading  */}
         <div>
              <h2>Let's build your future, together.</h2>
              <p>Have questions about Skillly? Whether you're a student, a partner, or a company — we’re ready to help. Pick a category, tell us your story, and we'll route your message to the right team.</p>
         </div>
         {/* contat details */}
         <div>
            {/* email */}
            <div>
                email
            </div>
            {/* Phone number */}
            <div>
                phone
            </div>

         </div>
         {/* time response */}
         <div>
            <div>
                <p>Response time: 24 hrs</p>
                <p>Support:Mon–Fri, 9am–6pm IST</p>
            </div>
         </div>
         {/* Social media */}
         <div>
            <p>Follow Us</p>
            <div>
                <p>Linkedin</p>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>X</p>
                <p>Youtube</p>
            </div>
         </div>
     </div>

     {/* Contact Support */}
     <div>

     </div>
 </div>

</section>


    {/* App Footer */}
    <AppFooter/>
    </>
  )
}

export default Contact