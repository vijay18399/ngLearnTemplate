import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.scss']
})
export class TutorialDetailsComponent {
 // Define the comments array and newComment object
 comments: {name: string, message: string}[] = [ { name: 'ajay', message: 'hello' },{ name: 'Raja ram', message: 'hello Bro om i will do ' }];
 newComment = { name: '', message: '' };

blog = {
 title: '10 Tips for Traveling on a Budget',
 datePosted: 'March 20, 2023',
 imageUrl: 'https://picsum.photos/id/1027/600/400',
 content: `
   <p>Traveling is an amazing experience, but it can also be expensive. If you're on a tight budget, it can be challenging to make your travel dreams a reality. But don't worry, with some careful planning and creativity, it's possible to travel on a budget and still have a great time. Here are 10 tips to help you travel on a budget:</p>
   
   <ol>
     <li>Travel during the off-season to save money on flights and accommodations.</li>
     <li>Use travel credit cards to earn points and miles that can be redeemed for travel.</li>
     <li>Stay in hostels or budget accommodations instead of hotels.</li>
     <li>Use public transportation instead of taxis or rental cars.</li>
     <li>Eat like a local and avoid expensive restaurants and tourist traps.</li>
     <li>Take advantage of free attractions and activities.</li>
     <li>Travel with friends or family and split costs.</li>
     <li>Be flexible with your travel dates and destinations.</li>
     <li>Use apps and websites to find deals on flights, accommodations, and activities.</li>
     <li>Set a budget and stick to it.</li>
   </ol>
   
   <p>Traveling on a budget may require some sacrifices, but it's worth it to have the experience of a lifetime. Happy travels!</p>
 `,
 likes: 23
};
onCommentSubmit() {
 if (this.newComment.name && this.newComment.message) {
   this.comments.push({ name: this.newComment.name, message: this.newComment.message });
   this.newComment.name = '';
   this.newComment.message = '';
 }
}

}
