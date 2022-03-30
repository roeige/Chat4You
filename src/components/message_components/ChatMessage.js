const ChatMessage = (props) => {
    return (<div class="container"
        className="main-chat-background chats col-8" >
        <div class="row" >
            <div class="col-1 person-icon" >
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16" >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg> </div> <div class="col" >
                <p className="text" > Alice </p> </div>
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
        </div> </div>
    );
};

export default ChatMessage;