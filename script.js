var app = new Vue({
    el:"#room-booking",
    data(){
        return{
            requirement:[
                {
                    title: "Rooms",
                    count: 1
                },
                {
                    title: "Adults",
                    count: 1
                },
                {
                    title: "children",
                    count: 1
                }
            ],

        };
      
    },

    methods:{

        enterDetails(event,index){
            if(index === 0){
                this.roomDetails(event,index);
            }
            else if(index === 1){
                this.adultsPersonDetails(event,index);
            }
            else{
                this.childrenDetails(event,index);
            }

        },
        roomDetails(event,index){
            const max_room_for_single_family = 5;
            if(event.target.id === "remove"){
                this.remove(event,index);
            }
            else if(event.target.id === "add"){
                this.addnum(event,index,max_room_for_single_family);
            }
        },
        adultsPersonDetails(event,index){
            if(event.target.id === "remove" && this.requirement[1].count >1){
                this.remove(event,index);
            }
            else if(event.target.id ==="add"){
                this.addnum(event,index);
            }
        },
        childrenDetails(event,index){
            if(event.target.id === "remove"){
                this.remove(event,index);
            }
            else{
                this.addnum(event,index);
            }
        },
        remove(event,index){
            this.requirement[index].count--;
            if(this.requirement[index].count <= 0){
                this.requirement[index].count =0;
            }
            console.log("member removed");
            console.log(event.target.id);
            this.trackMemeber();
        },
        addnum(event,index,max_count){
            console.log(max_count);
            this.requirement[index].count++;
            console.log(this.requirement[index].count);
            if(this.requirement[index].count === max_count+1){
                this.requirement[index].count = max_count;
                console.log("inside if",this.requirement[index].count);
               }
            console.log("member add");
            console.log(event.target.id);
            this.trackMemeber();
        },
        bookNow(){
            console.log("Number of Rooms Aloated", this.requirement[0].count)
            console.log(this.$refs.nameId.innerText);
        },
        trackMemeber(){
            var total_memebers = this.requirement[1].count + this.requirement[2].count;
            for(let i =1;i<6;i++){
                if(total_memebers <= 4*i){
                    this.requirement[0].count = i;
                    break;
                }
            }
        }
    }

})
