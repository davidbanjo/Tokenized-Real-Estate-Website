import React, { useState } from 'react'
import api from '../../utils/api'
import { collection, where, query, getDocs } from 'firebase/firestore'
import { db } from '../../utils/firebase'
import { toast } from 'react-hot-toast'

import './buttons.css'

const SecondaryBTN = () => {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ modal, setModal ] = useState(true)
    const [ loading, setLoading ] = useState(false)

    const q = query(collection(db, 'waitlist'), where("email", "==", email))

    const handleReload = () => {
        document.location.reload(true)
    } 

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const response = await getDocs(q)
               if (response.docs.length > 0) {
                    toast.success("You are on our Waitlist. You'll be notified soon about further updates.")
               } else {
                await api.submit({ name, email, phone, address })
                    toast.success("You've been added to our Waitlist. You'll be notified soon about further updates.")
               }

            console.log('Data inserted:', response.data)
        } catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false)
        }
        setName('')
        setEmail('')
        setPhone('')
        setAddress('')
        setModal(false)
        handleReload()
    };


  return (
    <>
      <button className='secondaryBTN btn btn-primary' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" >
          <h3 className='secondaryBtnText'>I'm Interested</h3>
      </button>

    {modal &&
    <div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  >
          <div className="modal-dialog">
              <div className="modal-content">
              <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Register now to benefit from our exclusive off plan pricing</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  <form name="waitlist" onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" className="form-control" id="recipient-name" required placeholder='Your Full Name:*'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="recipient-email" className="col-form-label">Email:</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" className="form-control" id="recipient-email" required placeholder='Email Adress:*'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="recipient-phone" className="col-form-label">Phone Number:</label>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" className="form-control" id="recipient-phone" required placeholder='e.g (+23412345678)*'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message-text" className="col-form-label">Address:</label>
                        <textarea value={address} onChange={(e) => setAddress(e.target.value)} name='address' className="form-control" id="message-text"></textarea>
                    </div>
                    <div className='mb-3'>
                      { 
                        loading !== true ?
                        <button type='submit' className="btn btn-primary form-control">SUBMIT</button> : 
                        <button type='submit' className="btn btn-primary form-control">LOADING...</button>
                      }
                      <p className='disclaimer'>* By registering, you agee to receive communications from MixFits tech creations regarding our product offerings, from which you have the option to unsubscribe</p>
                    </div>
                  </form>
              </div>
              <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
              </div>
              </div>
          </div>
          </div>
          </div>
          }
        </>
  )
}

export default SecondaryBTN