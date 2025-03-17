import React, { useState } from 'react'

function CustomModal({ open, setOpen, children }) {
    console.log(open, "checkOpen")
 
    return (

        <div class={`modal fade ${open ? "show" : ""} CustomModal`} 
            style={{ display: `${open ? "block" : "none"}`} }
            id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setOpen(false)}></button>
                    </div>
                    {children}
                </div>
            </div>
        </div>

    )
}

export default CustomModal
