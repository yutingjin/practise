package routers

import (
	"p3/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
	beego.Router("/about", &controllers.MainController{}, "get:About")
}
