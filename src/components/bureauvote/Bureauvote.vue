<template>
    <div class="container">
        <div v-if="loading">
            Loading ...
        </div>
        <!-- Insert start -->
        <div class="row">
            <div class="row justify-content-end">
                <div class="col">
                    <div class="row">
                        <Button variant="primary" class="btn btn-primary" @click="insertForm = !insertForm">
                            Add Bureauvote
                        </Button>
                    </div>
                    <Modal id='insert' v-model:visible="insertForm">
                        <div id="body">
                            <form id="insert" @submit="e => insert(e)">
                                	<div className="mb-3"> 
	 	<label className="form-label">Code Bureau</label> 
	 	<input className="form-control" type="text" name="codeBureau" />
	</div>
	<div className="mb-3"> 
	 	<label className="form-label">Centre Vote</label> 
	 	<input className="form-control" type="text" name="centreVote" />
	</div>
	<div className="mb-3"> 
	 	<label className="form-label">Fokontany</label> 
	 	<select className="form-control" name="fokontany" id="select-fokontany">
			<option v-for='elt in fokontany' :key='elt.id' :value='elt.id'>{{elt.nomFokontany}}</option>
			
			
		</select>
	</div><div className="mb-3"> 
	 	<label className="form-label">Bureau Vote</label> 
	 	<input className="form-control" type="text" name="bureauVote" />
	</div>
	
                                <div className="mb-3">
                                    <Button variant="primary" class="btn btn-primary" type= "submit" >
                                        Insert
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
        <!-- Insert end -->
        <!-- List start -->
        <div class="row">
            <table class="table">
                <thead>
                    <tr>
                        			<th> Code Bureau </th>
			<th> Centre Vote </th>
			<th> Id Fokontany </th>
			<th> Id </th>
			<th> Bureau Vote </th>

                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in bureauvote" :key="item.id">
                        		<td>{{item.codeBureau}}</td>
		<td>{{item.centreVote}}</td>
		<td>{{item.fokontany.nomFokontany}}</td>
		<td>{{item.id}}</td>
		<td>{{item.bureauVote}}</td>

                        <td>
                            <Button variant="primary" class="btn btn-warning" @click="targetItem = item; updateForm = !updateForm">
                                Edit
                            </Button>
                        </td>
                        <td>
                            <Button variant="danger" class="btn btn-danger" @click="targetItem = item; deleteForm = !deleteForm">
                                Delete
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- List end -->
        <!-- Update start -->
        <Modal id="update" v-model:visible="updateForm">
            <h2>Update Bureauvote</h2>
            <div id="body">
                <form id="update" @submit="e => update(e)" v-if="updateForm">
                    	<div className="mb-3"> 
	 	<label className="form-label">Code Bureau</label> 
	 	<input className="form-control" type="text" name="codeBureau" />
	</div>
	<div className="mb-3"> 
	 	<label className="form-label">Centre Vote</label> 
	 	<input className="form-control" type="text" name="centreVote" />
	</div>
	<div className="mb-3"> 
	 	<label className="form-label">id</label> 
	 	<select className="form-control" name="fokontany">
			<option v-for='elt in fokontany' :key='elt.id' :value='elt.id'>{{elt.nomFokontany}}</option>
	
	
	
	</select>
	</div><div className="mb-3"> 
	 	<label className="form-label"></label> 
	 	<input className="form-control" type="hidden" name="id" />
	</div>
	<div className="mb-3"> 
	 	<label className="form-label">Bureau Vote</label> 
	 	<input className="form-control" type="text" name="bureauVote" />
	</div>
	
                    <div className="mb-3">
                        <Button class="btn btn-primary" type= "submit" >
                            Update
                        </Button>
                      </div>
                </form>
            </div>
        </Modal>
        <!-- Update end -->
        <!-- Delete start -->
        <Modal id="delete" v-model:visible="deleteForm">
            <h2>Delete Bureauvote</h2>
            <div id="body">
                <form id="delete" @submit="del()" v-if="deleteForm">
                    <div className="mb-3">
                        <Button class="btn btn-danger" type= "submit" >
                            Delete
                        </Button>
                      </div>
                </form>
            </div>
        </Modal>
        <!-- Delete end -->
    </div>
</template>

<script>
    import { Modal } from 'usemodal-vue3';
    
    export default{
        data(){
            return {
                url: 'http://192.168.1.14:8080/demo_war_exploded/',
                items: null,
                targetItem: null,
                insertForm: false,
                deleteForm: false,
                updateForm: false,
                loading: false,
                	bureauvote: null,
	
	fokontany: null,
	
	
            }
        },
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Bureauvote',
        mounted(){
            this.getAll();
        },
        components: {
            Modal
        },
        methods: {
        
            async getAll() {
                /*try {
                    this.loading = true;
                    const response = await fetch(this.url + 'bureauvote');
                    if (!response.ok) {
                        throw new Error('Erreur réseau');
                    }
                    const data = await response.json();
                    this.items = data;
                    this.loading = false;
                } catch (error) {
                    if(this.loading) this.loading = false;
                    alert(error);
                }*/
                try{
                    	fetch(this.url + 'bureauvote') 
	 .then(response => response.json()) 
	.then(data => { this.bureauvote = data; }) 
	 .catch(error => alert(error)); 
	fetch(this.url + 'fokontany') 
	 .then(response => response.json()) 
	.then(data => { this.fokontany = data; }) 
	 .catch(error => alert(error)); 
	
                }catch (error) {
                    if(this.loading) this.loading = false;
                    alert(error);
                }   
            },
            async update(event) {
                event.preventDefault();
                const updateData = this.fetchFormData(event.target);
                try {
                    const response = await fetch(this.url + 'bureauvote', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updateData)
                    });
                    if (!response.ok) {
                        throw new Error('Erreur réseau');
                    }
                    this.updateForm = false;
                    this.getAll(); // reload local data
                } catch (error) {
                    alert(error);
                }
            },
            async del() {
                try {
                    const response = await fetch(this.url + 'bureauvote', {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(this.targetItem)
                    });
                    if (!response.ok) {
                        throw new Error('Erreur réseau');
                    }
                    this.deleteForm = false;
                    this.getAll(); // reload local data
                } catch (error) {
                    alert(error);
                }
            },
            async insert(event) {
                event.preventDefault();
                const insertData = this.fetchFormData(event.target);
                try {
                    const response = await fetch(this.url + 'bureauvote', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(insertData)
                    });
                    if (!response.ok) {
                        throw new Error('Erreur réseau');
                    }
                    console.log("Réponse", response);
                    this.insertForm = false;
                    this.getAll(); // reload local data
                } catch (error) {
                    alert(error);
                }
            },
            fetchFormData(dataForm) {
                var data = {};
                for (var i = 0; i < dataForm.length; i++) {
                    if (dataForm[i].type !== "submit") {
                        data[dataForm[i].name] = dataForm[i].value;
                    }
                }
                return data;
            }
        }

    }
</script>

<style>
    .modal-vue3-footer div {
        margin-top: -1000px;
    }
</style>
