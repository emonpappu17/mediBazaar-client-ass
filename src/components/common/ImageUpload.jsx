import PropTypes from "prop-types";

const ImageUpload = ({ handleImageUpload, imageText, previewImage, editMode = false, title }) => {
    return (
        <div className="grid gap-2">
            <label className="text-sm font-medium text-base-content">{title}</label>
            <div className="flex items-center justify-between gap-2">
                <div className='px-5 py-3 border-4 border-dotted border-base-300 rounded-lg'>
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="fileUpload"
                        onChange={handleImageUpload}
                    />
                    <label htmlFor="fileUpload" className="btn cursor-pointer">
                        {/* Image Text */}
                        {imageText.length > 20 ? imageText.split('.')[0].slice(0, 15) + '....' + (imageText.split('.')[1]?.slice(0, 3) || '') : imageText}
                    </label>
                </div>
                {previewImage && (
                    <img
                        src={previewImage}
                        alt="Preview"
                        className="size-20 object-cover rounded-md"
                    />
                )}
            </div>
            {editMode && (
                <p className="text-xs text-base-content/70">
                    Leave blank to keep the current image
                </p>
            )}
        </div>
    );
};

ImageUpload.propTypes = {
    handleImageUpload: PropTypes.func.isRequired,
    imageText: PropTypes.string.isRequired,
    previewImage: PropTypes.string,
    editMode: PropTypes.bool,
    title: PropTypes.string.isRequired,
};

export default ImageUpload;