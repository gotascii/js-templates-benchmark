// based on methodology developed by PPK:
// http://www.quirksmode.org/blog/archives/2009/08/when_to_read_ou.html
(function($){
  $.benchmark = function(times, runner_times, result_selector, func){
    var results = [];
    while (times != 0){
      result = $.runner(runner_times, func);
      results.push(result);
      times--;
    }

    var sum = results.reduce(function(sum, val, idx, array){  
      return sum + val;  
    });

    var avg = (sum/results.length);
    $(result_selector).html(avg);
  };

  $.runner = function(times, func){
    var startTime = new Date().getTime();
  
    while (times != 0){
      func();
      times--;
    }

    var endTime = new Date().getTime();
    var result = (endTime-startTime);
    return (endTime-startTime);
  };
})(jQuery);