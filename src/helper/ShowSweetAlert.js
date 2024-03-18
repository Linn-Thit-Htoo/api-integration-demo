import swal from "sweetalert";

const ShowSweetAlert = (message, icon) => {
    swal({
        title: message,
        icon: icon,
      });
}
export default ShowSweetAlert;