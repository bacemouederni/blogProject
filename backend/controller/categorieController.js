import AsyncHandler from "express-async-handler";
import Categorie from "../model/categoriesModel.js"
import Article from "../model/articleModel.js";

const addCategorieForm= AsyncHandler (async(req,res)=>{
    res.render('ajoutcategories');
});
const ajoutCategorie = AsyncHandler(async (req, res) => {
    const categorie = new Categorie({
      categorie: req.body.categorie,
    });
    await categorie.save();
    res.redirect("/ajoutArticle");
  });

const getCategorie = AsyncHandler(async (req, res) => {
  const Categories = await Categorie.find().limit(3);
  res.json(Categories)
});

const CatArticle = AsyncHandler(async (req, res) => {
  const articles = await Article.find({ Categorie: req.params.id }).populate(
    "Categorie"
  );

  const Categorie = await Categorie.find().limit(3);
  res.render("home", { articles: articles, Categorie: Categorie });
});

const deletCategorie=AsyncHandler(async(req,res)=>{
  const query = { _id: (req.params.id) };

  let categorie=await Categorie.deleteOne (query);
 // res.redirect('/showArticle')
 res.json("delet")
});

const findCategorie=AsyncHandler(async(req,res)=>{
  const categorie=await Categorie.findById(req.params.id);
  res.json(categorie);
});

const modifierCategorie=AsyncHandler(async(req,res)=>{
  const categorie= ({
      categorie:req.body.categorie,
  })
  await Categorie.findByIdAndUpdate(req.params.id,categorie);
 res.json(categorie)
});
export {addCategorieForm,ajoutCategorie,CatArticle,getCategorie,deletCategorie,findCategorie,modifierCategorie} 