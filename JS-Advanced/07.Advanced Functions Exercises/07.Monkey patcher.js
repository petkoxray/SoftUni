function solution(arg) {
    switch (arg) {
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':
            let totalVotes = this.upvotes + this.downvotes;
            let rating = 'new';

            if (totalVotes >= 10) {
                if (this.upvotes > 0.66 * (this.upvotes + this.downvotes)) {
                    rating = 'hot';
                } else if (this.downvotes > this.upvotes) {
                    rating = 'unpopular';
                } else if (this.upvotes > 100 || this.downvotes > 100) {
                    rating = 'controversial';
                }
            }

            let currentUpVotes = this.upvotes;
            let currentDownVotes = this.downvotes;

            if (totalVotes > 50) {
                let addVotes = Math.ceil(0.25 * Math.max(currentUpVotes, currentDownVotes));
                currentUpVotes += addVotes;
                currentDownVotes += addVotes;
            }

            let score = currentUpVotes - currentDownVotes;
            return [currentUpVotes, currentDownVotes, score, rating];
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');
solution.call(post, 'downvote');
console.log(score = solution.call(post, 'score'));
