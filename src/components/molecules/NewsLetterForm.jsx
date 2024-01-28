import React from 'react'
import Swal from 'sweetalert2'

export default function NewsLetterForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Thank you for subscribing!',
      html: 'From now on, you will be up to date on all of the freshest news from Aleph Zero! <br />Please note that you can unsubscribe at any time by clicking ‘unsubscribe’ at the end of any message you receive from us.',
      text: '',
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: {
        popup: "bg-night-50 text-day-400 text-sm",
        title: "text-day-150",
        htmlContainer: "",
        confirmButton: "!text-buttons-primary-color focus:!shadow-none !bg-buttons-primary !rounded-[3rem] !min-w-36 px-3"
      }
    })
  }

  return (
    <div className="max-w-[368px] text-night-medium-emphasis text-body-s | js-a0-newsletter-footer-parent">
      <div className="footer-newsletter-box--1 | js-a0-newsletter-footer-form-box">
        <h4 className="quote-heading font-headline text-h2 text-text-night-100">
          Be <strong className='font-bold'>future-ready</strong>
        </h4>

        <p className='my-4 text-body-s md:my-6'>Get the latest from the Aleph Zero ecosystem and engineering updates, straight to your inbox.</p>


        <form action="" method='POST' className="relative" onSubmit={handleSubmit}>
          <div className="">
            <input className='newsletter-input' type="email" name="email" required placeholder="Your email" />
          </div>

          <div className="form-checkbox">
            <input type="checkbox" id="fnf" name="n_ch" className='form-checkbox-input opacity-0' required />
            <label htmlFor="fnf" className='form-checkbox-label'>
              I consent to receive commercial information in the form of a newsletter sent to the e-mail address provided by the Aleph Zero Foundation with registered seat in Bergliweg 15, 6300 Zug. Providing consent is voluntary. Consent may be revoked at any time.
            </label>
          </div>

          <p className='pl-6 mt-4'>I consent to receive commercial information in the form of a newsletter sent to the e-mail</p>

          <div className="button-area">
            <button type="submit" className="newsletter-button" title="Subscribe">
              <i className="icon-mail-add mr-2 text-[21px]"></i>
              <span>Subscribe</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
