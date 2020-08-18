let commentForm = document.getElementById('comment-form');
let inputedCommentText = document.getElementById('inputed-comment-text');
let commentbtn = document.getElementById('comment-btn');
let cancle = document.getElementById('cancle-comment');
let hiddenCommentButtons = document.querySelector('.post-new-comment');
let comment = document.querySelector('.comment');
let commentText = document.querySelector('.comment-text');
let topComment = document.querySelector('.top-comment');

commentForm.addEventListener('click', function() {
	hiddenCommentButtons.classList.remove('hide');
	inputedCommentText.style.borderBottom = '2px solid #000000';
});

cancle.addEventListener('click', hideAndReset);

commentForm.addEventListener('keydown', function() {
	commentbtn.style.background = '#3da6ff';
	commentbtn.style.cursor = 'pointer';

	if (inputedCommentText.value === '') {
		commentbtn.style.background = '#5f5f5f';
		commentbtn.style.cursor = 'auto';
	}
	// FIX THIS ^^^^^^
});

commentbtn.addEventListener('click', function() {
	if (inputedCommentText.value == '') return;
	addNewComment();
	hideAndReset();
});

function hideAndReset() {
	hiddenCommentButtons.classList.add('hide');
	commentForm.reset();
	commentbtn.style.background = '#5f5f5f';
	commentbtn.style.cursor = 'auto';
	inputedCommentText.style.borderBottom = '1px solid #303030';
}

function addNewComment() {
	topComment.insertAdjacentHTML(
		'beforebegin',
		`<div class="comment">
            <div class="comment-info">
                <img height="40" width="40" src="images/user.jpg" alt="profile-icon">
                <p class="comment-name">Terence McKenna <a href="#">1 second ago</a></p>
            </div>
            <p class="comment-text">${inputedCommentText.value}</p>
            <div class="likes">
                <a href="#">
                    <img height="25" width="25" src="images/like.png" alt="like">
                </a>
                <p class="comment-likes"></p>
                <a href="#">
                    <img height="25" width="25" src="images/dislike.png" alt="dislike">
                </a>
                <a href="#" class="comment-reply">REPLY</a>
            </div>
        </div>`
	);
}
