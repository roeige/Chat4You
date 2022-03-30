const MessageSender = (props) => {
    return (
        <div class="container message-bar" >
            <form class="chat-label-form" >
                <div class="row" >
                    <button class="col-1 attach-icon" >
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-paperclip"
                            viewBox="0 0 16 16" >
                            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                        </svg> </button>
                    <div class="col-sm-4 col-md-6 col-lg-9" >
                        <input type="text" class="form-control"
                            placeholder="New message here..." />
                    </div> <div class="col-1" >
                        <button type="button"
                            class="btn btn-outline-secondary btn-sm" > Send </button>
                    </div>
                </div>
            </form>
        </div>

    );
};
export default MessageSender;