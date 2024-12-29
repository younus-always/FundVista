require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 4000;


// Middleware..
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.DB_PASS}@cluster0.1aj11.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
      serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
      }
});

async function run() {
      try {
            // await client.connect();

            const database = client.db("campaignDB").collection("campaigns");
            const users = client.db("campaignDB").collection("users");
            const donateCampaign = client.db("campaignDB").collection("donateCampaign");

            app.get('/campaigns', async (req, res) => {
                  const cursor = database.find();
                  const result = await cursor.toArray();
                  res.send(result);
            })

            app.post('/addCampaign', async (req, res) => {
                  const newCampaign = req.body;
                  const result = await database.insertOne(newCampaign);
                  res.send(result);
            })

            app.delete('/campaigns/:id', async (req, res) => {
                  const id = req.params.id;
                  const query = { _id: new ObjectId(id) };
                  const result = await database.deleteOne(query);
                  res.send(result)
            })

            app.put('/campaigns/:id', async (req, res) => {
                  const id = req.params.id;
                  const filter = { _id: new ObjectId(id) };
                  const options = { upsert: true };
                  const updateCampaign = req.body;
                  const campaign = {
                        $set: {
                              title: updateCampaign.title,
                              type: updateCampaign.type,
                              thumbnail: updateCampaign.thumbnail,
                              amount: updateCampaign.amount,
                              deadline: updateCampaign.deadline,
                              description: updateCampaign.description,
                        }
                  }
                  const result = await database.updateOne(filter, campaign, options);
                  res.send(result)
            })

            app.get('/users', async (req, res) => {
                  const cursor = await users.find().toArray();
                  res.send(cursor);
            })

            app.post('/users', async (req, res) => {
                  const user = req.body;
                  const result = await users.insertOne(user);
                  res.send(result);
            })

            app.get('/donateCampaign', async (req, res) => {
                  const cursor = await donateCampaign.find().toArray();
                  res.send(cursor);
            });

            app.post('/donateCampaign', async (req, res) => {
                  const donate = req.body;
                  const result = await donateCampaign.insertOne(donate);
                  res.send(result)
            });

            // await client.db("admin").command({ ping: 1 });
            // console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } finally {
            // await client.close();
      }
}
run().catch(console.dir);



app.get("/", (req, res) => {
      res.send("Server connected successfully")
})


app.listen(port, () => {
      console.log(`Server running port ${port}`)
})