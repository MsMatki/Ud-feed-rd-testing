
$(function() {

    // Testing suite of RSS Feeds
    describe('RSS Feeds', function() {

         // All feeds are defined, not empty
        it('are defined', function(){
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /*Test loops trough each field and ensures it has a URL defined
        and that the URL is not empty.*/
        it('it has a URL defined and the URL is not empty', ()=>{
            allFeeds.forEach((feed)=> {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

         //Test loops trough each field and ensures it has a name defined and that the name is not empty
         it('it has a name defined and the name is not empty', ()=>{
            allFeeds.forEach((feed)=> {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });

    // Menu test suite
    describe('The menu', ()=> {
        //Menu element is hidden by default
        it('Menu hidden', ()=>{
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })

         //menu icon toggles hide and show when clicked
          it('menu displays and hides when clicked', ()=>{
            $('.menu-icon-link').trigger('click'); 
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
          })

        });
    //Initial Entries suite
        describe('Initial Entries', ()=>{

        // run before test
        beforeEach((done)=> {
            loadFeed(0, done);
          });
          //Make sure there is at least single entry element within the feed container.
          it('element is present', ()=>{
            expect($('.feed .entry').length).toBeGreaterThan(0);
          })

    });

    //New Feed Selection suite
        describe('New Feed Selection', ()=>{
        //the content changes when new feed is loaded using loadFeed function
        let feed;
            beforeEach((done)=>{
                loadFeed(0, ()=>{
                    feed = $('.feed').html();
                    loadFeed(1, done);
                });
            });
            // the content changes
            it('content changes', ()=>{
                expect($('.feed').html()).not.toBe(feed);
            })

    });
}());
