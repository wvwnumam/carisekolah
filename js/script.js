$(document).ready(function(){
$.ajaxSetup({ cache: false });
$('#search').keyup( function () {
    $.ajax({
        url: 'http://jendela.data.kemdikbud.go.id/api/index.php/Csekolah/detailSekolahGET',
        type: 'get',
        dataType: 'json',
        data: {
            'mst_kode_wilayah' : '030000',
            'bentuk' : 'SMK'
        },
        success: function (result) {
            $('#school').html('');
            $('#state').val('');
            let school = result.data;
            let searchField = $('#search').val();
            let expression = new RegExp(searchField, "i");
            $.each(school, function (key, data) {
                if (data.sekolah.search(expression) != -1){
                $('#school').append(`
                <div class="large-4 medium-4 cell">
                    <div class="callout">
                    <h5>`+ data.sekolah +`</h5>
                    <div class="grid-x grid-padding-x align-center">
                        <div class="small-3"><small class="subheader">NPSN</small></div>
                        <div class="small-1"><small class="subheader">:</small></div>
                        <div class="small-6"><small>`+ data.npsn +`</small></div>

                        <div class="small-3"><small class="subheader">Kab/Kota</small></div>
                        <div class="small-1"><small class="subheader">:</small></div>
                        <div class="small-6"><small>`+ data.kabupaten_kota +`</small></div>

                        <div class="small-3"><small class="subheader">Kecamatan</small></div>
                        <div class="small-1"><small class="subheader">:</small></div>
                        <div class="small-6"><small>`+ data.kecamatan +`</small></div>
                        
                        <div class="small-3"><small class="subheader">Alamat Jalan</small></div>
                        <div class="small-1"><small class="subheader">:</small></div>
                        <div class="small-6"><small>`+ data.alamat_jalan +`</small></div>
                    </div>
                    </div>
                </div>
                `);
                }
            });
        }
    });
});
});