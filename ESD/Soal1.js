function analisisRating(dataReview) {
  dataReview.sort(function(a, b) {
    return a - b;
  });

  var lowestRating = dataReview[0];
  var highestRating = dataReview[dataReview.length - 1];
  var totalRating = dataReview.reduce(function(sum, rating) {
    return sum + rating;
  });
  var averageRating = totalRating / dataReview.length;

  console.log("Rating Terendah:", lowestRating);
  console.log("Rating Tertinggi:", highestRating);
  console.log("Rata-rata Rating:", averageRating.toFixed(1));
}

var reviewData1 = [4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0];
analisisRating(reviewData1);

var reviewData2 = [5, 4, 2.5, 5, 3.6, 1.1, 3.6, 4, 4.2, 1.5];
analisisRating(reviewData2);

