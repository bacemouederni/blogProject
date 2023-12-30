import express from 'express'

const router=express.Router()
import multer from 'multer';
// multer configuration
const storage = multer.diskStorage({
  destination:  (req, file, cb)=> {
    //null: annuler tous les erreurs qui peuvent se produire
    cb(null, './public/uploads')
  },
  filename:  (req, file, cb)=>  {
    const fileName = Date.now() + '-' + file.originalname
    cb(null, fileName);
  }
})
const upload = multer({ storage: storage })





import {addCategorieForm,ajoutCategorie,getCategorie,deletCategorie,findCategorie,modifierCategorie} from'../controller/categorieController.js';
import {ajoutArticleForm,ajoutarticle,deletOne,update,modifier,home, category, recherche,detailsArticle,communt, showArticle} from '../controller/articleController.js';

router.route('/getCategorie').get(getCategorie)
router.route('/ajoutCategorie').post(ajoutCategorie)
router.route('/deleteCategorie/:id').delete(deletCategorie)
router.route('/getCategorie/:id').get(findCategorie)
router.route('/updateCategorie/:id').put(modifierCategorie)

router.route('/ajoutArticle').get(ajoutArticleForm)
router.route('/ajoutArticle').post(upload.single('image'), ajoutarticle)


router.route('/showArticle').get(showArticle)
router.route('/deletOne/:id').get(deletOne)
router.route('/update/:id').get(update)
router.route('/update/:id').post(modifier)
router.route('/').get(home)
router.route('/articles/:id').get(category)
router.route('/').post(recherche)
router.route('/detailsArticle/:id').get(detailsArticle)
router.route('/detailsArticle/:id').post(communt)












export default router;