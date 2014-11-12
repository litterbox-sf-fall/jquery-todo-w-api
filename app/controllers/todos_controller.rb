class TodosController < ApplicationController
  before_action :set_todo, only: [:show, :update, :destroy]
  before_action :render_main_layout_if_format_html, except: [:index]
  respond_to :json, :html


  def index
    respond_with Todo.all
  end

  def create
    respond_with Todo.create(todo_params)
  end

  # Fill in update
  def update
    set_todo
    @todo.update_attributes(todo_params)

    respond_to do |f|
      f.json {render json: {}, status: 200}
    end
  end

  # Fill in destroy
  def destroy
    set_todo
    respond_with @todo.destroy
    # respond_to do |f|
    #   #f.html
    #   f.json { render json: {}, status: 200}
    # end
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :completed)
  end

  def set_todo
    @todo = Todo.find(params[:id])
  end

  def render_main_layout_if_format_html
    # check the request format
    if request.format.symbol == :html
      render "layouts/application"
    end
  end

end
