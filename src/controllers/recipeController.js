const { recipesService } = require('../services');

const {
  validateCreateRecipe,
  validateReadAllRecipes,
  validateReadById,
  validateUpdateRecipeById,
  validateDeleteRecipeById,
  validateUpdateImageById,
} = recipesService;

const {
  CREATED,
  BAD_REQUEST,
  NOT_FOUND,
  OK,
  NO_CONTENT,
} = require('../helpers');

const createRecipe = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const { userId } = req;
    const result = await validateCreateRecipe(
      name, ingredients,
      preparation, userId,
    );
    res.status(CREATED).json({ recipe: result });
  } catch (error) {
    console.error(error);
    if (error.code) {
      return next({ status: error.code.status, message: error.code.message });
    }
    next({
      status: BAD_REQUEST,
      message: error.message,
    });
  }
};

const readAllRecipes = async (_req, res, next) => {
  try {
    const result = await validateReadAllRecipes();
    res.status(OK).json(result);
  } catch (error) {
    console.error(error);
    next({
      status: NOT_FOUND,
      message: error.message,
    });
  }
};

const readRecipeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await validateReadById(id);
    if (result.status) {
      return next({ status: result.status, message: result.message });
    }
    res.status(OK).json(result);
  } catch (error) {
    console.error(error);
    next({
      status: BAD_REQUEST,
      message: error.message,
    });
  }
};

const updateRecipeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, ingredients, preparation } = req.body;
    const result = await validateUpdateRecipeById(
      id,
      name,
      ingredients,
      preparation,
    );
    res.status(OK).json(result);
  } catch (error) {
    console.error(error);
    if (error.code) {
      return next({ status: error.code.status, message: error.code.message });
    }
    next({ status: BAD_REQUEST, message: error.message });
  }
};

const deleteRecipeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await validateDeleteRecipeById(id);
    res.status(NO_CONTENT).json();
  } catch (error) {
    console.error(error);
    next({
      status: BAD_REQUEST,
      message: error.message,
    });
  }
};

const createRecipeImageById = async (req, res, next) => {
  try {
    const { userId } = req;
    const { id } = req.params;
    const urlImage = `localhost:3000/images/${id}.jpeg`;
    const result = await validateUpdateImageById(id, urlImage, userId);
    res.status(OK).json(result);
  } catch (error) {
    console.error(error);
    next({
      status: BAD_REQUEST,
      message: error.message,
    });
  }
};

module.exports = {
  createRecipe,
  readAllRecipes,
  readRecipeById,
  updateRecipeById,
  deleteRecipeById,
  createRecipeImageById,
};
